import React, { ReactNode, useState } from 'react';

interface TabsProps {
  numberOfTabs: number;
  children: ({
    tab,
    setTab,
    nextTab,
    prevTab,
    onTab,
  }: {
    tab: number;
    setTab: React.Dispatch<React.SetStateAction<number>>;
    nextTab: () => void;
    prevTab: () => void;
    onTab: (tabNumber: number) => boolean;
  }) => ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children, numberOfTabs }) => {
  const [tab, setTab] = useState(0);

  const nextTab = () => {
    if (tab + 1 === numberOfTabs) {
      setTab(0);
    } else {
      setTab(tab + 1);
    }
  };

  const prevTab = () => {
    if (tab === 0) {
      setTab(numberOfTabs - 1);
    } else {
      setTab(tab - 1);
    }
  };

  const onTab = (tabNumber: number): boolean => tab === tabNumber;

  return <div>{children({ tab, setTab, nextTab, prevTab, onTab })}</div>;
};
