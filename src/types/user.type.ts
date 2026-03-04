/* =========================
   TYPES (Issue: Langsung di index)
   Tugas: 
    1. Pindahkan ke file khusus (user.type), dalam folder yang sesuai 
    2. gunakan export interface ...
    3. jadika id opsional -> id?: number
   ========================= */

export interface User {
  id?: number;
  name: string;
  role: string;
}