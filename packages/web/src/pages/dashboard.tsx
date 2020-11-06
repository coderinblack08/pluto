import { Box } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AuthNavbar } from '../components/shared/AuthNavbar';
import { useMeQuery } from '../generated/graphql';

const Dashboard: React.FC = () => {
  const { data: me, loading: meLoading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (!meLoading && !me) {
      router.push('/login');
    }
  }, [me, meLoading]);

  return (
    <Box>
      <AuthNavbar />
    </Box>
  );
};

export default Dashboard;
