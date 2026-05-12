
import React from 'react';

export interface Channel {
  id: string;
  name: string;
  logo: string;
  description: string | React.ReactNode;
  highlights?: string[];
  category?: string;
}

export interface ProviderGroup {
  id: string;
  name: string;
  channels: Channel[];
}

export enum NavigationPaths {
  HOME = '/',
  ABOUT = '/quem-somos',
  CHANNELS = '/canais-lineares',
  SVA = '/svas',
  MVNO = '/mvno',
  VOD = '/vod',
  EPG = '/epg',
  CONTACT = '/contato'
}
