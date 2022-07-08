import { useState } from 'react';
import axios from 'axios';

const initialTodo = {
  title: '',
  desc: '',
};

const initialTodoError = {
  title: '',
  message: '',
};

const AddTodo = () => {
  const [todo, setTodo] = useState(initialTodo);
  const [errors, setErrors] = useState(initialTodoError);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setTodo((perv) => ({ ...perv, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let tempErrors = {};
    setLoading(true);

    if (!todo?.title) {
      setErrors((prev) => ({ ...prev, title: 'Title is required' }));
      tempErrors = { ...tempErrors, title: 'Title is required' };
    } else {
      setErrors((prev) => ({ ...prev, title: '' }));
      tempErrors = { ...tempErrors, title: '' };
    }

    if (!tempErrors?.title) {
      try {
        const { data, status } = await axios.post(
          'http://localhost:4001/todos',
          todo
        );
        if (status === 201) {
          setSuccess(data?.success);
          setTimeout(() => {
            setSuccess('');
          }, 1000);
        }
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          title: error?.response?.data?.title,
        }));
        setLoading(false);
      }
    }
    setLoading(false);
  };

  return (
    <section className="mt-24">
      {success ? (
        <h5
          style={{ color: 'green', textAlign: 'center', marginBottom: '20px' }}
        >
          {success}
        </h5>
      ) : null}
      <div className="container mx-auto">
        <div class="w-[700px] mx-auto">
          <h2 className=" text-center text-[green] text-2xl">ADD Todo</h2>
          <form onSubmit={handleClick}>
            <div className="mt-3">
              <label class="">
                <span className="text-[green]">title</span>
              </label>
              <input
                className=" w-full border   mt-3 p-1"
                type="text"
                name="title"
                placeholder="title"
                onChange={handleChange}
              />
              {!errors?.title ? (
                ''
              ) : (
                <p style={{ color: 'red' }}>{errors?.title}</p>
              )}
            </div>
            <div className="mt-3">
              <label class="">
                <span className="text-[green]">category</span>
              </label>
              <input
                className=" w-full border   mt-3 p-1"
                type="text"
                name="category"
                placeholder="category"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label class="">
                <span className="text-[green]">description</span>
              </label>
              <textarea
                name="desc"
                className=" w-full border   mt-3 p-1"
                placeholder="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              className="btn w-full text-[white] pt-2 pb-2 bg-[green] mt-5"
              type="submit"
              style={{ cursor: 'pointer' }}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTodo;
