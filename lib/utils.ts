import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validateString = (value: unknown, maxLen: number) => {
  if (!value || typeof value !== "string" || value.length > maxLen) {
    return false
  }
  return true
}

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  // if error is of Error type
  if (error instanceof Error) {
    message = error.message 
    

  // if error is an object
  } else if (error && typeof error === 'object' && 'message' in error ){
    if ('name' in error){
      if (error.name === "validation_error"){
        message = "Invalid email "
      }
    }
    message = String(error.message)

  // if error is a string message
  } else if (typeof error === 'string'){
    message = error
  
  } else {
    message = "Something went wrong :("
  }

  return message
}

export const fadeInAnimationVariants = (delayUnit: number, start: number = 0) => ({
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: start + delayUnit * index
        }
    }),
})


export const tweenInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.5
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      stiffness: 260,
      damping: 20,
      delay: index,
      duration: 0.2,
    },
  }),
  
}