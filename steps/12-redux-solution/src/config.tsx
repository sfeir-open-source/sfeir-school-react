import React, { createContext, useContext, useState } from 'react';

export interface AppConfig {
  apiBaseUrl: string;
  theme: 'blue' | 'pink';
}

const defaultConfig: AppConfig = { apiBaseUrl: '/api', theme: 'blue' };

const AppConfigContext = createContext<{ config: AppConfig; setConfig(newConfig: AppConfig): void }>({
  config: defaultConfig,
  setConfig() {},
});

export function AppConfigProvider({ children }: React.PropsWithChildren) {
  const [config, setConfig] = useState(defaultConfig);
  return <AppConfigContext.Provider value={{ config, setConfig }}>{children}</AppConfigContext.Provider>;
}

export function useAppConfig() {
  return useContext(AppConfigContext);
}
