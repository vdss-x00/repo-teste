import supabase from "../config/supabase.js";

async function findAll() {
  const { data, error } = await supabase
  .from("categories")
  .select("*");
  
  if (error) {
    throw error;
  }
  
  return data;
}

async function create(category: {
    name: string;
    description: string;
    icon: string;
    display_order: number;
    active: boolean;
}){
    const { data, error } = await supabase
    .from("categories")
    .insert(category)
    .select()
    .single();

    if (error) {
        throw error;
    }
  
    return data;

}

async function update(id: string, category: {
    name: string;
    description: string;
    icon: string;
    display_order: number;
    active: boolean;
}){
    const { data, error } = await supabase
    .from("categories")
    .update(category)
    .eq("id", id)
    .select()
    .single();

    if (error) {
        throw error;
    }
  
    return data;

}

async function remove(id: string){
    const { data, error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id)
    .select()
    .single();

    if (error) {
        throw error;
    }
  
    return data;

}

async function findByKeyword(keyword: string){
    const { data, error } = await supabase
    .from("categories")
    .select("*")
    .or(`name.like%${keyword}%,description.like.%${keyword}%`);

    if (error){
        throw error;
    }

    return data;
}

export default {
  findAll,
  remove,
  findByKeyword,
  create,
  update,
};