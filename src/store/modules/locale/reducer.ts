import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const localeSlice = createSlice({
  name: 'locale',
  initialState: { locale: '' },
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = localeSlice.actions;
