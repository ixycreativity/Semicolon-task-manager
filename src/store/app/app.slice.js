import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const appSlice = createSlice({
  name: "app",
  initialState: {
    ui: {
      sidebar: {
        isOpen: true,
      },
      modal: {
        isOpen: false,
        modalType: null,
      },
      taskStatus: {
        UNNASIGNED: "UNNASIGNED",
        PENDING: "PENDING",
        IN_PROGRESS: "IN_PROGRESS",
        IN_REVIEW: "IN_REVIEW",
        COMPLETED: "COMPLETED",
      },
    },
    auth: {
      isLoggedIn: false,
      isLoading: false,
      error: null,
      loggedUser: {
        accessToken: null,
        userInfo: null,
      },
    },
  },
  reducers: {
    tooggleSidebar: (state) => {
      state.ui.sidebar.isOpen = !state.ui.sidebar.isOpen;
    },
    openSidebar: (state) => {
      state.ui.sidebar.isOpen = true;
    },
    closeSidebar: (state) => {
      state.ui.sidebar.isOpen = false;
    },
    tooggleModal: (state) => {
      state.ui.modal.isOpen = !state.ui.modal.isOpen;
    },
    openModal: (state, action) => {
      state.ui.modal.isOpen = true;
      state.ui.modal.modalType = action.payload;
    },
    closeModal: (state) => {
      state.ui.modal.isOpen = false;
      state.ui.modal.modalType = null;
    },
    loginStart: (state) => {
      state.auth.isLoading = true;
    },
    loginError: (state, action) => {
      state.auth.isLoading = false;
      state.auth.error = action.payload;
      state.auth.isLoggedIn = false;
      state.auth.loggedUser = {
        accessToken: null,
      };
    },
    logInSuccess: (state, action) => {
      state.auth.isLoggedIn = true;
      state.auth.isLoading = false;
      state.auth.error = null;
      state.auth.loggedUser.accessToken = action.payload;
    },
    getLoggUsersSuccess: (state, action) => {
      state.auth.isLoading = false;
      state.auth.loggedUser.userInfo = action.payload;
    },
    uploadPictureSuccess: (state, action) => {
      state.auth.isLoading = false;
      state.auth.error = null;
      state.auth.loggedUser.userInfo = action.payload;
    },
    logOut: (state) => {
      state.auth.isLoggedIn = false;
      state.auth.loggedUser = {
        accessToken: null,
        userInfo: null,
      };
    },
    updateUserStart: (state) => {
      state.auth.isLoading = true;
    },
    updateUserError: (state, action) => {
      state.auth.isLoading = false;
      state.auth.error = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.auth.isLoading = false;
      state.auth.error = null;
      state.auth.loggedUser.userInfo = action.payload;
    },
  },
});

export const {
  tooggleSidebar,
  openSidebar,
  closeSidebar,
  tooggleModal,
  openModal,
  closeModal,
  logInSuccess,
  loginStart,
  loginError,
  logOut,
  getLoggUsersSuccess,
  uploadPictureSuccess,
  updateUserStart,
  updateUserError,
  updateUserSuccess,
} = appSlice.actions;

export const getLoggedUserAction = (payload) => (dispatch) => {
  dispatch(loginStart());
  dispatch(getLoggUsersSuccess(payload.data));
};

export const updateLoggedUser = (payload, onSuccess, onError) => (dispatch) => {
  dispatch(updateUserStart());
  try {
    updateUserSuccess(payload);
    if (onSuccess) {
      onSuccess();
    }
  } catch (e) {
    dispatch(updateUserError(e.payload.message));
    if (onError) {
      onError(e.message);
    }
  }
};

export const logInAction = (payload) => (dispatch) => {
  dispatch(loginStart());
  try {
    dispatch(logInSuccess(payload));

    // dispatch(getLoggedUserAction());
  } catch (e) {
    dispatch(loginError(e.message));
  }
};

// export const updateLoggedUser =
//   (payload, onSuccess, onError) => async (dispatch, getState) => {
//     dispatch(updateUserStart());
//     const state = getState();
//     const token = state.app.auth.loggedUser.accessToken.accessToken;
//     try {
//       const response = await axios.patch(
//         `${API_BASE_URL}/user/update`,
//         {
//           ...payload,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       updateUserSuccess(response.data);
//       if (onSuccess) {
//         onSuccess();
//       }
//     } catch (e) {
//       dispatch(updateUserError(e.response.data.message));
//       if (onError) {
//         onError(e.message);
//       }
//     }
//   };

export default appSlice.reducer;
