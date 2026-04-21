// supabase-config.js
// Replace these two values with your actual Supabase project credentials
const SUPABASE_URL  = 'https://wreqrvskgwrcykbkusdn.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZXFydnNrZ3dyY3lrYmt1c2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1OTYwMzIsImV4cCI6MjA5MjE3MjAzMn0.1ABTx4vGJ7hze5xI967F5Kvv31qiKYvK6gjHQZHyeg0';

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  }
});

// Role hierarchy — higher index = more permissions
export const ROLES = ['GA', 'KP', 'KB', 'PK', 'admin', 'super_admin'];

export const ROLE_LABELS = {
  super_admin: 'Super Admin',
  admin:       'Admin',
  PK:          'Penolong Kanan',
  KB:          'Ketua Bidang',
  KP:          'Ketua Panitia',
  GA:          'Guru Am',
};

export const ROLE_COLORS = {
  super_admin: { bg:'rgba(99,102,241,.15)', border:'rgba(99,102,241,.30)', text:'#818cf8' },
  admin:       { bg:'rgba(139,92,246,.15)', border:'rgba(139,92,246,.30)', text:'#a78bfa' },
  PK:          { bg:'rgba(34,197,94,.12)',  border:'rgba(34,197,94,.25)',  text:'#4ade80' },
  KB:          { bg:'rgba(245,158,11,.12)', border:'rgba(245,158,11,.25)', text:'#fbbf24' },
  KP:          { bg:'rgba(59,130,246,.12)', border:'rgba(59,130,246,.25)', text:'#60a5fa' },
  GA:          { bg:'rgba(148,163,184,.12)',border:'rgba(148,163,184,.25)',text:'#94a3b8' },
};

/**
 * Get current session. Returns { session, user } or { session:null, user:null }
 */
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return { session, user: session?.user ?? null };
}

/**
 * Fetch user role from user_roles table.
 * Returns role string (default 'GA') or null if not found.
 */
export async function getUserRole(userId) {
  if (!userId) return null;
  const { data, error } = await supabase
    .from('user_roles')
    .select('role, full_name')
    .eq('user_id', userId)
    .single();
  if (error || !data) return 'GA';
  return data.role;
}

/**
 * Upsert user into user_roles on first login (role defaults to GA).
 */
export async function ensureUserRole(user) {
  if (!user) return;
  await supabase.from('user_roles').upsert({
    user_id: user.id,
    full_name: user.user_metadata?.full_name || user.email,
    role: 'GA',
  }, { onConflict: 'user_id', ignoreDuplicates: true });
}

/**
 * Sign in with Google OAuth. Redirects to auth.html after.
 */
export async function signInWithGoogle(redirectTo) {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://smk-gunsanad.github.io/smkg/auth.html'
    }
  });
  if (error) console.error('OAuth error:', error);
}

/**
 * Sign out.
 */
export async function signOut() {
  await supabase.auth.signOut();
}

/**
 * Check if role meets minimum required role level.
 */
export function hasMinRole(userRole, minRole) {
  return ROLES.indexOf(userRole) >= ROLES.indexOf(minRole);
}
