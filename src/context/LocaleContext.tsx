'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export type Locale = 'en-IN'|'en-US';

export const LocaleContext = createContext<Locale>('en-IN');

export const useLocale = () => {useContext(LocaleContext)};