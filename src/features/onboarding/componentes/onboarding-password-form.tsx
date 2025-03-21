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
      console.log(data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" {...register('username')} />
        {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" {...register('firstName')} />
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" {...register('lastName')} />
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
      </div>
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
      <div>
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input id="repeatPassword" type="password" {...register('repeatPassword')} />
        {errors.repeatPassword && <span style={{ color: 'red' }}>{errors.repeatPassword.message}</span>}
      </div>
      <div>
        <label htmlFor="terms">
          <input id="terms" type="checkbox" {...register('terms')} />
          Accept Terms and Conditions
        </label>
        {errors.terms && <span style={{ color: 'red' }}>{errors.terms.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OnboardingPasswordForm;