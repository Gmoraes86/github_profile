/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/useRedux';
import { getUserRepos } from '../../Redux/github/actions';
import ProfileCard from '../../Components/ProfileCard';
import Summary from '../../Components/Summary';
import RepositoriesCard from '../../Components/RepositoriesCard';
import { RootStateProps } from '../../Redux/store';

const Profile = () => {
  const { user } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { githubState } = useAppSelector((state: RootStateProps) => state);

  useEffect(() => {
    if (user && githubState.user?.login === user) {
      dispatch(getUserRepos(user));
    } else {
      navigate('/');
    }
  }, [user, githubState.user]);

  return (
    <Flex gap={4}>
      <Box w="250px">
        <ProfileCard />
      </Box>
      <Box flex="1">
        <Summary />
        <RepositoriesCard />
      </Box>
    </Flex>
  );
};

export default Profile;
