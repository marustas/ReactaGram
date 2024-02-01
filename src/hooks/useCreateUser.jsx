export async function useCreateUser(){
    
const { data, error } = await supabase
.from('users')
.insert([
  { some_column: 'someValue', other_column: 'otherValue' },
])
.select()
        
}