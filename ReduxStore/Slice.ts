import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface ExampleState {
  isMenuOpen: boolean;
  isStaticSidebar: boolean;
  isSidebarOpen: boolean;
}

// Initial state with types
const initialState: ExampleState = {
  isMenuOpen: false,
  isStaticSidebar: false,
  isSidebarOpen: false,
};

// Create the slice with typed reducers
export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Type the action payload as boolean
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setIsStaticSidebar: (state, action: PayloadAction<boolean>) => {
      state.isStaticSidebar = action.payload;
    },
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    }
  },
});

// Export actions
export const { setIsMenuOpen, setIsStaticSidebar, setIsSidebarOpen } = exampleSlice.actions;

// Export reducer
export default exampleSlice.reducer;
