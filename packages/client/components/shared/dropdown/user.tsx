// import { useApolloClient } from '@apollo/client';
// import { Menu, Transition } from '@headlessui/react';
// import classNames from 'classnames';
// import { ChevronDown } from 'heroicons-react';
// import { useRouter } from 'next/router';
// import React from 'react';
// import { useLogoutMutation, useMeQuery } from '../../../generated/graphql';
// import { NextLink } from '../nextlink';

// export const UserDropdown: React.FC<{ dark?: boolean }> = ({
//   dark = false,
// }) => {
//   const { data: me } = useMeQuery();
//   const [logout] = useLogoutMutation();
//   const apolloClient = useApolloClient();
//   const router = useRouter();

//   return (
//     <div className="relative inline-block text-left">
//       <Menu>
//         {({ open }) => (
//           <>
//             <span className="rounded-sm shadow-sm">
//               <Menu.Button
//                 className={classNames(
//                   'inline-flex items-center justify-center w-full leading-5 transition duration-150 ease-in-out rounded-md focus:outline-none focus:shadow-outline active:bg-gray-50 active:text-gray-800',
//                   {
//                     'hover:text-gray-300 text-gray-200 bg-gray-900 px-4 py-3': dark,
//                     'hover:text-gray-600 text-gray-700 bg-white px-3 py-2': !dark,
//                   }
//                 )}
//               >
//                 <span>{me.me?.name}</span>
//                 <ChevronDown
//                   className={classNames('ml-2 -mr-1', {
//                     'text-gray-300': dark,
//                     'text-gray-600': !dark,
//                   })}
//                   size={18}
//                 />
//               </Menu.Button>
//             </span>
//             <Transition
//               show={open}
//               enter="transition ease-out duration-100"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-75"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items
//                 static
//                 className={`z-50 absolute right-0 w-56 mt-2 origin-top-right bg-white ${
//                   dark ? 'border-none' : 'border border-gray-200'
//                 } divide-y divide-gray-200 rounded-md shadow-lg outline-none`}
//               >
//                 <div className="px-4 py-3 bg-gray-50 rounded-md">
//                   <p className="text-sm leading-5 text-gray-800">
//                     Signed in as
//                   </p>
//                   <p className="text-sm font-medium leading-5 text-gray-900 truncate">
//                     {me.me?.email}
//                   </p>
//                 </div>

//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <div className="relative z-50">
//                         <NextLink
//                           href="/account-settings"
//                           className={`${
//                             active
//                               ? 'bg-indigo-500 text-white font-semibold'
//                               : 'text-gray-700'
//                           } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
//                         >
//                           Account settings
//                         </NextLink>
//                       </div>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <div className="relative z-50">
//                         <NextLink
//                           href="/pricing"
//                           className={`${
//                             active
//                               ? 'bg-indigo-500 text-white font-semibold'
//                               : 'text-gray-700'
//                           } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
//                         >
//                           Upgrade
//                         </NextLink>
//                       </div>
//                     )}
//                   </Menu.Item>
//                 </div>

//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={async () => {
//                           await logout();
//                           await apolloClient.resetStore();
//                           router.push('/login');
//                         }}
//                         className={`${
//                           active
//                             ? 'bg-red-500 text-white font-semibold'
//                             : 'text-gray-700'
//                         } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left focus:outline-none`}
//                       >
//                         Sign Out
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </>
//         )}
//       </Menu>
//     </div>
//   );
// };

import { useApolloClient } from '@apollo/client';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/core';
import { ChevronDown } from 'heroicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { useLogoutMutation, useMeQuery } from '../../../generated/graphql';

export const UserDropdown: React.FC<{ dark?: boolean }> = ({
  dark = false,
}) => {
  const { data: me } = useMeQuery();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const router = useRouter();

  return (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        rounded="md"
        transition="all 0.2s"
        bgColor="gray.900"
        variantColor="black"
        _expanded={{ bgColor: 'black' }}
        _focus={{ bgColor: 'black', shadow: 'outline' }}
        _hover={{ bgColor: 'black', color: 'gray.200' }}
        fontWeight="medium"
        color="gray.300"
      >
        {me.me?.name}
        <ChevronDown
          size={16}
          className="inline ml-1"
          style={{ marginBottom: '1px' }}
        />
      </MenuButton>
      <MenuList color="gray.700">
        <MenuGroup title={me.me?.email} color="gray.600">
          <MenuItem>Account Settings</MenuItem>
          <MenuItem>Upgrade</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem
            onClick={async () => {
              await logout();
              await apolloClient.resetStore();
              router.push('/login');
            }}
          >
            Sign Out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
