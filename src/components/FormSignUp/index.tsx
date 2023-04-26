import TextField from 'components/TextField';
import { Email, Lock } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import Link from 'next/link';
import { FormWrapper, FormLink } from 'components/Form';

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        icon={<Email />}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        icon={<Lock />}
      />
      <TextField
        type="password"
        name="confirm-password"
        placeholder="Confirm password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account? <Link href={'/sign-in'}>Sign in</Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignUp;
