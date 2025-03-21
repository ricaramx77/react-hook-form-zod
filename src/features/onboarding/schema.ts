import { z } from "zod";

export const onboardingSchema = z.object({
    username: z.string().min(3).max(20),
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(8, 'Confirm Password must be at least 8 characters long'),
    repeatPassword: z.string().min(8, 'Repeat Password must be at least 8 characters long'),
    terms: z.boolean().refine((data) => data),
  });
  

export type OnboardingSchema = z.infer<typeof onboardingSchema>;