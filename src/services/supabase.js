import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://tlowlhfarkbljagxmihv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb3dsaGZhcmtibGphZ3htaWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyODcyNzMsImV4cCI6MjAyMTg2MzI3M30.3fmzcE4F6PI5qrTYpWOzY446I2b-XieNA5R5JPX66N0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;