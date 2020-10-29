import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  findPosts: Array<Post>;
  getCommunity: Community;
  findCommunities: PaginatedCommunities;
  hello: Scalars['String'];
  me?: Maybe<User>;
};


export type QueryFindPostsArgs = {
  communityId: Scalars['String'];
};


export type QueryGetCommunityArgs = {
  id: Scalars['String'];
};


export type QueryFindCommunitiesArgs = {
  options: PaginatedCommunitiesArgs;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Float'];
  comments: Scalars['Float'];
  likes: Scalars['Float'];
  communityId: Scalars['String'];
  community: Community;
  announcementId?: Maybe<Scalars['Float']>;
  announcement: Announcement;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Community = {
  __typename?: 'Community';
  id: Scalars['String'];
  name: Scalars['String'];
  about: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  maxParticipants?: Maybe<Scalars['Int']>;
  isSchool: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  emailNotifications: Scalars['Boolean'];
  posts: Scalars['Float'];
  creatorId: Scalars['Float'];
  creator: User;
  isCreator: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  name: Scalars['String'];
  email: Scalars['String'];
  schoolAccount: Scalars['Boolean'];
  subscription: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Announcement = {
  __typename?: 'Announcement';
  id: Scalars['Float'];
  title: Scalars['String'];
  announcement: Scalars['String'];
  postId: Scalars['Float'];
  post: Post;
};

export type PaginatedCommunities = {
  __typename?: 'PaginatedCommunities';
  hasMore: Scalars['Boolean'];
  communities: Array<Community>;
};

export type PaginatedCommunitiesArgs = {
  limit: Scalars['Float'];
  cursor?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnnouncement: AnnouncementResponse;
  createCommunity: CommunityResponse;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
};


export type MutationCreateAnnouncementArgs = {
  options: AnnouncementArgs;
};


export type MutationCreateCommunityArgs = {
  options: CommunityArgs;
};


export type MutationRegisterArgs = {
  options: RegisterArgs;
};


export type MutationLoginArgs = {
  options: LoginArgs;
};

export type AnnouncementResponse = {
  __typename?: 'AnnouncementResponse';
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type AnnouncementArgs = {
  title: Scalars['String'];
  announcement: Scalars['String'];
  communityId: Scalars['String'];
};

export type CommunityResponse = {
  __typename?: 'CommunityResponse';
  errors?: Maybe<Array<FieldError>>;
  community?: Maybe<Community>;
};

export type CommunityArgs = {
  name: Scalars['String'];
  about: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  maxParticipants?: Maybe<Scalars['Int']>;
  isSchool?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  emailNotifications?: Maybe<Scalars['Boolean']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type RegisterArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  schoolAccount: Scalars['Boolean'];
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CommunityFragment = (
  { __typename?: 'Community' }
  & Pick<Community, 'id' | 'name' | 'about' | 'email' | 'tags' | 'website' | 'location' | 'isPrivate' | 'isSchool' | 'maxParticipants' | 'emailNotifications' | 'createdAt' | 'updatedAt'>
);

export type ErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'schoolAccount'>
);

export type UserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & ErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type CreateCommunityMutationVariables = Exact<{
  options: CommunityArgs;
}>;


export type CreateCommunityMutation = (
  { __typename?: 'Mutation' }
  & { createCommunity: (
    { __typename?: 'CommunityResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & ErrorFragment
    )>>, community?: Maybe<(
      { __typename?: 'Community' }
      & CommunityFragment
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  options: LoginArgs;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & UserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: RegisterArgs;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & UserResponseFragment
  ) }
);

export type FindCommunitiesQueryVariables = Exact<{
  options: PaginatedCommunitiesArgs;
}>;


export type FindCommunitiesQuery = (
  { __typename?: 'Query' }
  & { findCommunities: (
    { __typename?: 'PaginatedCommunities' }
    & Pick<PaginatedCommunities, 'hasMore'>
    & { communities: Array<(
      { __typename?: 'Community' }
      & CommunityFragment
    )> }
  ) }
);

export type GetCommunityQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCommunityQuery = (
  { __typename?: 'Query' }
  & { getCommunity: (
    { __typename?: 'Community' }
    & Pick<Community, 'isCreator'>
    & { creator: (
      { __typename?: 'User' }
      & UserFragment
    ) }
    & CommunityFragment
  ) }
);

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export const CommunityFragmentDoc = gql`
    fragment Community on Community {
  id
  name
  about
  email
  tags
  website
  location
  isPrivate
  isSchool
  maxParticipants
  emailNotifications
  createdAt
  updatedAt
}
    `;
export const ErrorFragmentDoc = gql`
    fragment Error on FieldError {
  field
  message
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  email
  schoolAccount
}
    `;
export const UserResponseFragmentDoc = gql`
    fragment UserResponse on UserResponse {
  errors {
    ...Error
  }
  user {
    ...User
  }
}
    ${ErrorFragmentDoc}
${UserFragmentDoc}`;
export const CreateCommunityDocument = gql`
    mutation CreateCommunity($options: CommunityArgs!) {
  createCommunity(options: $options) {
    errors {
      ...Error
    }
    community {
      ...Community
    }
  }
}
    ${ErrorFragmentDoc}
${CommunityFragmentDoc}`;
export type CreateCommunityMutationFn = Apollo.MutationFunction<CreateCommunityMutation, CreateCommunityMutationVariables>;

/**
 * __useCreateCommunityMutation__
 *
 * To run a mutation, you first call `useCreateCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityMutation, { data, loading, error }] = useCreateCommunityMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateCommunityMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommunityMutation, CreateCommunityMutationVariables>) {
        return Apollo.useMutation<CreateCommunityMutation, CreateCommunityMutationVariables>(CreateCommunityDocument, baseOptions);
      }
export type CreateCommunityMutationHookResult = ReturnType<typeof useCreateCommunityMutation>;
export type CreateCommunityMutationResult = Apollo.MutationResult<CreateCommunityMutation>;
export type CreateCommunityMutationOptions = Apollo.BaseMutationOptions<CreateCommunityMutation, CreateCommunityMutationVariables>;
export const LoginDocument = gql`
    mutation Login($options: LoginArgs!) {
  login(options: $options) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: RegisterArgs!) {
  register(options: $options) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const FindCommunitiesDocument = gql`
    query FindCommunities($options: PaginatedCommunitiesArgs!) {
  findCommunities(options: $options) {
    communities {
      ...Community
    }
    hasMore
  }
}
    ${CommunityFragmentDoc}`;

/**
 * __useFindCommunitiesQuery__
 *
 * To run a query within a React component, call `useFindCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCommunitiesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useFindCommunitiesQuery(baseOptions?: Apollo.QueryHookOptions<FindCommunitiesQuery, FindCommunitiesQueryVariables>) {
        return Apollo.useQuery<FindCommunitiesQuery, FindCommunitiesQueryVariables>(FindCommunitiesDocument, baseOptions);
      }
export function useFindCommunitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCommunitiesQuery, FindCommunitiesQueryVariables>) {
          return Apollo.useLazyQuery<FindCommunitiesQuery, FindCommunitiesQueryVariables>(FindCommunitiesDocument, baseOptions);
        }
export type FindCommunitiesQueryHookResult = ReturnType<typeof useFindCommunitiesQuery>;
export type FindCommunitiesLazyQueryHookResult = ReturnType<typeof useFindCommunitiesLazyQuery>;
export type FindCommunitiesQueryResult = Apollo.QueryResult<FindCommunitiesQuery, FindCommunitiesQueryVariables>;
export const GetCommunityDocument = gql`
    query GetCommunity($id: String!) {
  getCommunity(id: $id) {
    ...Community
    isCreator
    creator {
      ...User
    }
  }
}
    ${CommunityFragmentDoc}
${UserFragmentDoc}`;

/**
 * __useGetCommunityQuery__
 *
 * To run a query within a React component, call `useGetCommunityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommunityQuery(baseOptions?: Apollo.QueryHookOptions<GetCommunityQuery, GetCommunityQueryVariables>) {
        return Apollo.useQuery<GetCommunityQuery, GetCommunityQueryVariables>(GetCommunityDocument, baseOptions);
      }
export function useGetCommunityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommunityQuery, GetCommunityQueryVariables>) {
          return Apollo.useLazyQuery<GetCommunityQuery, GetCommunityQueryVariables>(GetCommunityDocument, baseOptions);
        }
export type GetCommunityQueryHookResult = ReturnType<typeof useGetCommunityQuery>;
export type GetCommunityLazyQueryHookResult = ReturnType<typeof useGetCommunityLazyQuery>;
export type GetCommunityQueryResult = Apollo.QueryResult<GetCommunityQuery, GetCommunityQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;