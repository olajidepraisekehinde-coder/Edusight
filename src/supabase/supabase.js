
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fwmytjrlhshjerssjiwu.supabase.co"
const supabasePublishableKey = "sb_publishable_znCgM6ScadtiitHBA1BxVg_ILtuTgSy"

export const supabase = createClient(supabaseUrl, supabasePublishableKey)


