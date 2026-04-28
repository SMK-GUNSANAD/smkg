// supabase-config.js
const SUPABASE_URL  = 'https://wreqrvskgwrcykbkusdn.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZXFydnNrZ3dyY3lrYmt1c2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1OTYwMzIsImV4cCI6MjA5MjE3MjAzMn0.1ABTx4vGJ7hze5xI967F5Kvv31qiKYvK6gjHQZHyeg0';

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});

// ── Role hierarchy ──
export const ROLES = ['GA', 'KP', 'KB', 'PK', 'admin', 'super_admin'];

// ── All specific role codes with display labels ──
export const ALL_ROLES = {
  // Top level
  super_admin: { label: 'Super Admin',       level: 'super_admin' },
  admin:       { label: 'Admin',             level: 'admin'       },
  PK:          { label: 'Penolong Kanan',    level: 'PK'          },
  // Ketua Bidang
  KBB:         { label: 'KB Bahasa',         level: 'KB', bidang: 'bahasa'  },
  KBSM:        { label: 'KB Sains Matematik',level: 'KB', bidang: 'sains'   },
  KBSS:        { label: 'KB Sains Sosial',   level: 'KB', bidang: 'sosial'  },
  KBT:         { label: 'KB TVET',           level: 'KB', bidang: 'tvet'    },
  // Ketua Panitia — Bahasa
  KPBM:        { label: 'KP Bahasa Melayu',  level: 'KP', bidang: 'bahasa',  subject: 'bm'   },
  KPBI:        { label: 'KP Bahasa Inggeris',level: 'KP', bidang: 'bahasa',  subject: 'bi'   },
  KPBA:        { label: 'KP Bahasa Arab',    level: 'KP', bidang: 'bahasa',  subject: 'ba'   },
  KPKM:        { label: 'KP Kesusasteraan',  level: 'KP', bidang: 'bahasa',  subject: 'km'   },
  KPBKD:       { label: 'KP Kadazan Dusun',  level: 'KP', bidang: 'bahasa',  subject: 'bkd'  },
  // Ketua Panitia — Sains Matematik
  KPM3:        { label: 'KP Matematik',      level: 'KP', bidang: 'sains',   subject: 'mt'   },
  KPS:         { label: 'KP Sains',          level: 'KP', bidang: 'sains',   subject: 'sc'   },
  KPBio:       { label: 'KP Biologi',        level: 'KP', bidang: 'sains',   subject: 'bio'  },
  KPFiz:       { label: 'KP Fizik',          level: 'KP', bidang: 'sains',   subject: 'fiz'  },
  KPKim:       { label: 'KP Kimia',          level: 'KP', bidang: 'sains',   subject: 'kim'  },
  KPAM:        { label: 'KP Add Math',       level: 'KP', bidang: 'sains',   subject: 'mt2'  },
  // Ketua Panitia — Sains Sosial
  KPsej:       { label: 'KP Sejarah',        level: 'KP', bidang: 'sosial',  subject: 'sej'  },
  KPgeo:       { label: 'KP Geografi',       level: 'KP', bidang: 'sosial',  subject: 'geo'  },
  KPPI:        { label: 'KP Pend. Islam',    level: 'KP', bidang: 'sosial',  subject: 'pai'  },
  KPPSV:       { label: 'KP PSV',            level: 'KP', bidang: 'sosial',  subject: 'psv'  },
  KPPJPK:      { label: 'KP PJPK',          level: 'KP', bidang: 'sosial',  subject: 'pjpk' },
  KPSS:        { label: 'KP Sains Sukan',    level: 'KP', bidang: 'sosial',  subject: 'ss'   },
  // Ketua Panitia — TVET
  KPptn:       { label: 'KP Pertanian',      level: 'KP', bidang: 'tvet',    subject: 'prt'  },
  KPpnn:       { label: 'KP Perniagaan',     level: 'KP', bidang: 'tvet',    subject: 'per'  },
  KPeko:       { label: 'KP Ekonomi',        level: 'KP', bidang: 'tvet',    subject: 'eko'  },
  KPak:        { label: 'KP Asas Kelestarian',level:'KP', bidang: 'tvet',    subject: 'ak'   },
  KPKP:        { label: 'KP Katering',       level: 'KP', bidang: 'tvet',    subject: 'kdp'  },
  KPLN:        { label: 'KP Landskap',       level: 'KP', bidang: 'tvet',    subject: 'ldn'  },
  KPRBT:       { label: 'KP RBT',            level: 'KP', bidang: 'tvet',    subject: 'rbt'  },
  // General
  GA:          { label: 'Guru Am',           level: 'GA'          },
};

export const ROLE_LABELS = {
  super_admin:'Super Admin', admin:'Admin', PK:'Penolong Kanan',
  KB:'Ketua Bidang', KP:'Ketua Panitia', GA:'Guru Am',
};

export const ROLE_COLORS = {
  super_admin:{ bg:'rgba(99,102,241,.15)',  border:'rgba(99,102,241,.30)',  text:'#818cf8' },
  admin:      { bg:'rgba(139,92,246,.15)',  border:'rgba(139,92,246,.30)',  text:'#a78bfa' },
  PK:         { bg:'rgba(34,197,94,.12)',   border:'rgba(34,197,94,.25)',   text:'#4ade80' },
  KB:         { bg:'rgba(245,158,11,.12)',  border:'rgba(245,158,11,.25)',  text:'#fbbf24' },
  KP:         { bg:'rgba(59,130,246,.12)',  border:'rgba(59,130,246,.25)',  text:'#60a5fa' },
  GA:         { bg:'rgba(148,163,184,.12)', border:'rgba(148,163,184,.25)',text:'#94a3b8' },
};

// Allowed emails — add every staff email here
export const ALLOWED_EMAILS = [
  'sekolah-9345@moe-dl.edu.my',
  'kencdah@gmail.com',
];

export function isEmailAllowed(email) {
  if (!email) return false;
  return ALLOWED_EMAILS.includes(email.toLowerCase());
}

/**
 * Get full user record from user_roles table.
 * Returns { role, level, bidang, subject, full_name } or defaults.
 */
export async function getUserRole(userId) {
  if (!userId) return 'GA';
  const { data, error } = await supabase
    .from('user_roles')
    .select('role, full_name, bidang, subject')
    .eq('user_id', userId)
    .single();
  if (error || !data) return 'GA';
  return data.role; // specific role code e.g. 'KBB', 'KPBM'
}

/**
 * Get full user data including bidang/subject from user_roles.
 */
export async function getUserData(userId) {
  if (!userId) return null;
  const { data, error } = await supabase
    .from('user_roles')
    .select('role, full_name, bidang, subject, email')
    .eq('user_id', userId)
    .single();
  if (error || !data) return { role: 'GA', full_name: '', bidang: null, subject: null };
  return data;
}

/**
 * Get role level (GA/KP/KB/PK/admin/super_admin) from specific role code.
 */
export function getRoleLevel(roleCode) {
  return ALL_ROLES[roleCode]?.level || 'GA';
}

/**
 * Upsert user on first login (role defaults to GA).
 */
export async function ensureUserRole(user) {
  if (!user) return;
  await supabase.from('user_roles').upsert({
    user_id:   user.id,
    full_name: user.user_metadata?.full_name || user.email,
    email:     user.email,
    role:      'GA',
  }, { onConflict: 'user_id', ignoreDuplicates: true });
}

export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: 'https://smk-gunsanad.github.io/smkg/auth.html' }
  });
  if (error) console.error('OAuth error:', error);
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return { session, user: session?.user ?? null };
}

export function hasMinRole(userRole, minRole) {
  const level = getRoleLevel(userRole);
  return ROLES.indexOf(level) >= ROLES.indexOf(minRole);
}
