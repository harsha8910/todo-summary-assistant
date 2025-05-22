const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.getTodos = async (req, res) => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
};

exports.addTodo = async (req, res) => {
  const { title } = req.body;
  const { data, error } = await supabase.from('todos').insert([{ title, completed: false }]).select();
  if (error) return res.status(500).json({ error });
  res.status(201).json(data[0]);
};

exports.editTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const updateFields = {};
  if (title !== undefined) updateFields.title = title;
  if (completed !== undefined) updateFields.completed = completed;

  const { data, error } = await supabase
    .from('todos')
    .update(updateFields)
    .eq('id', id)
    .select();

    if (error) return res.status(500).json({ error });
    res.json(data[0]);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('todos').delete().eq('id', id);
  if (error) return res.status(500).json({ error });
  res.json({ message: 'Todo deleted successfully' });
};
