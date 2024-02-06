'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

type FormInput = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Home() {
  const { register, handleSubmit, reset } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput, e) => {
    e?.preventDefault()
    console.log(data)
    reset()
  }
  return (
    <main className='h-full flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-1 items-center'
      >
        <input
          {...register('name')}
          className='border-2 border-black rounded-md'
        />
        <input
          {...register('email')}
          className='border-2 border-black rounded-md'
        />
        <input
          {...register('password')}
          className='border-2 border-black rounded-md'
        />
        <input
          {...register('confirmPassword')}
          className='border-2 border-black rounded-md'
        />
        <button type='submit' className='text-white bg-sky-500 p-2 rounded-md'>
          회원가입
        </button>
      </form>
    </main>
  )
}
