import React from 'react';

const CategoryAdd = () => {
    return (
        <section className="mt-24">
        <div className="container mx-auto">
            <div class="w-[700px] mx-auto">
                <h2 className=" text-center text-[green] text-2xl">ADD Category</h2>
                <form >
                   <div className="mt-3">
                        <label class="">
                            <span className="text-[green]">title</span>
                        </label>
                        <input className=' w-full border   mt-3 p-1' type="text" name="name" placeholder='title' />
                    </div>
                   <div className="mt-3">
                        <label class="">
                            <span className="text-[green]">description</span>
                        </label>
                        <textarea className=' w-full border   mt-3 p-1' placeholder='description'></textarea>
                    </div>
                    <input  className='btn w-full text-[white] pt-2 pb-2 bg-[green] mt-5' type="submit" value="Add Todo" />
                </form>
            </div>
        </div>
      
    </section>
    );
};

export default CategoryAdd;