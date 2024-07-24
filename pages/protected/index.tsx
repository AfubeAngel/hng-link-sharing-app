import { useRouter } from 'next/router';
import useAuth from '@/hooks/useAuth';

const ProtectedPage: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return <div>Protected Content</div>;
};

export default ProtectedPage;
