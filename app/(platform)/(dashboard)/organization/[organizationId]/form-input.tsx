'use client'

import { Input } from '@/components/ui/input'
import { useFormStatus } from 'react-dom'

interface ForminputProps {
  errors?: {
    title?: string[]
  }
}

const FormInput = ({ errors }: ForminputProps) => {
  const { pending } = useFormStatus()

  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p
              key={error}
              className="text-rose-500"
            >
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default FormInput
