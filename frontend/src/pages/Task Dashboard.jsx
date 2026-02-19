import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons?.[name] || Icons.HelpCircle;
  return <LucideIcon {...props} />;
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-lg text-slate-900">TaskFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-700 hover:text-indigo-600 duration-300">Dashboard</Link>
          </nav>
          <button className="md:hidden">
            <Icon name="Menu" className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur border-t border-slate-200/60">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© 2024 TaskFlow. Built with React + Tailwind.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-indigo-600 duration-300"><Icon name="Github" className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-indigo-600 duration-300"><Icon name="Twitter" className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TaskCard = ({ task, onToggle, onDelete }) => {
  return (
    <div className="group bg-white/60 backdrop-blur rounded-2xl border border-slate-200/60 p-4 md:p-5 flex items-start gap-4 shadow-sm hover:shadow-lg duration-300">
      <button onClick={() => onToggle(task.id)} className="mt-1">
        <Icon
          name={task.completed ? "CheckCircle" : "Circle"}
          className={`w-6 h-6 ${task.completed ? 'text-emerald-500' : 'text-slate-400'} duration-300`}
        />
      </button>
      <div className="flex-1">
        <h3 className={`font-semibold text-slate-900 ${task.completed ? 'line-through opacity-60' : ''}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className={`text-sm text-slate-600 mt-1 ${task.completed ? 'line-through opacity-60' : ''}`}>
            {task.description}
          </p>
        )}
        <p className="text-xs text-slate-400 mt-2">Created: {new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 text-rose-500 hover:text-rose-700 duration-300"
      >
        <Icon name="Trash2" className="w-5 h-5" />
      </button>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
        alt="Empty tasks"
        className="mx-auto w-64 h-40 object-cover rounded-2xl shadow-lg mb-6"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/1a1a2e/eaeaea?text=No+Tasks';
        }}
      />
      <h3 className="text-xl font-semibold text-slate-800">No tasks yet</h3>
      <p className="text-slate-500 mt-2">Add your first task above to get started.</p>
    </div>
  );
};

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design new dashboard', description: 'Create wireframes and mockups', completed: false, createdAt: new Date('2024-06-01') },
    { id: 2, title: 'Review PR #42', description: 'Check the authentication flow', completed: true, createdAt: new Date('2024-06-02') },
    { id: 3, title: 'Update documentation', description: 'Add API examples', completed: false, createdAt: new Date('2024-06-03') },
  ]);
  const [filter, setFilter] = useState('All');
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      title: newTask,
      description: '',
      completed: false,
      createdAt: new Date(),
    };
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const completionRate = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        {/* Hero */}
        <section className="text-center mb-12 md:mb-20">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format"
            alt="Task management"
            className="mx-auto w-full max-w-4xl h-64 md:h-80 object-cover rounded-3xl shadow-xl mb-8"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/1200x600/1a1a2e/eaeaea?text=Task+Dashboard';
            }}
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">Task Dashboard</h1>
          <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-2xl mx-auto">Organize, track, and complete your tasks with clarity and speed.</p>
        </section>

        {/* Add Task */}
        <section className="max-w-3xl mx-auto mb-8">
          <div className="bg-white/70 backdrop-blur rounded-2xl border border-slate-200/60 p-4 md:p-6 shadow-sm">
            <div className="flex gap-3">
              <input
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && addTask()}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={addTask}
                className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 duration-300 shadow-md hover:shadow-lg"
              >
                <Icon name="Plus" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-3xl mx-auto mb-6">
          <div className="flex items-center justify-center gap-3">
            {['All', 'Active', 'Completed'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium duration-300 ${
                  filter === f
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-white/60 text-slate-700 hover:bg-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Task List */}
        <section className="max-w-3xl mx-auto mb-12">
          {filteredTasks.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-4">
              {filteredTasks.map(task => (
                <TaskCard key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
              ))}
            </div>
          )}
        </section>

        {/* Stats */}
        <section className="max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur rounded-2xl border border-slate-200/60 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{totalCount}</p>
                  <p className="text-sm text-slate-500">Total</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-500">{completedCount}</p>
                  <p className="text-sm text-slate-500">Done</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-500">{totalCount - completedCount}</p>
                  <p className="text-sm text-slate-500">Active</p>
                </div>
              </div>
              <div className="w-full md:w-64">
                <div className="flex items-center justify-between text-sm text-slate-600 mb-1">
                  <span>Progress</span>
                  <span>{completionRate}%</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full duration-500"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}