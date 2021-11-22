puts "🌱 Seeding spices..."

# Seed your database here
Task.create([
    {
       category: 'code',
       username: 'auggierb',
       task_description: 'Finish Flatiron project!'
       
    },
    {
        category: 'chores',
        username: 'auggierb',
        task_description: 'Do dishes'

    },
    {
    category: 'chores',
       username: 'auggierb',
       task_description: 'Make bed'
}
])
User.create([{username: 'auggierb'}])
puts "✅ Done seeding!"
