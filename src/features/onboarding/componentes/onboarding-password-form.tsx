import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from "zod";
import { onboardingSchema } from '../schema.ts';

const OnboardingPasswordForm: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

  type FormFields = z.infer<typeof onboardingSchema>;

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OnboardingPasswordForm;