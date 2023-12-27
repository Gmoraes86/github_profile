/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container, Flex, Icon, Input } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux';
import { getUserProfile } from '../../Redux/github/actions';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootStateProps } from '../../Redux/store';
import { FaGithub } from 'react-icons/fa6';

function Header() {
  const dispatch = useAppDispatch();

  const { githubState, requestsState } = useAppSelector(
    (state: RootStateProps) => state
  );

  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit } = useForm<{ search: string }>();

  const onSubmit = (data: { search: string }) => {
    if (data.search.trim().length > 2) {
      dispatch(getUserProfile(data.search));
    }
  };

  useEffect(() => {
    if (
      requestsState.getUserProfile === 'fulfilled' &&
      githubState?.user?.login &&
      location.pathname === '/'
    ) {
      navigate(`/${githubState.user.login}`);
    }

    if (requestsState.getUserProfile === 'rejected') {
      navigate('/not-found');
    }
  }, [requestsState, githubState]);

  return (
    <Container maxW="1000px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <Icon
            as={FaGithub}
            w={8}
            h={8}
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
            mr={4}
          />
          <Input
            placeholder="Search Profile"
            size="sm"
            {...register('search')}
            mr={4}
          />
          <Button colorScheme="blue" size="sm" type="submit">
            Pesquisar
          </Button>
        </Flex>
      </form>
    </Container>
  );
}

export default Header;
