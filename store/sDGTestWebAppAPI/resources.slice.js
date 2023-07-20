import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_resource_list = createAsyncThunk(
  "resources/api_v1_resource_list",
  async payload => {
    const response = await apiService.api_v1_resource_list(payload)
    return response.data
  }
)
export const api_v1_resource_create = createAsyncThunk(
  "resources/api_v1_resource_create",
  async payload => {
    const response = await apiService.api_v1_resource_create(payload)
    return response.data
  }
)
export const api_v1_resource_read = createAsyncThunk(
  "resources/api_v1_resource_read",
  async payload => {
    const response = await apiService.api_v1_resource_read(payload)
    return response.data
  }
)
export const api_v1_resource_update = createAsyncThunk(
  "resources/api_v1_resource_update",
  async payload => {
    const response = await apiService.api_v1_resource_update(payload)
    return response.data
  }
)
export const api_v1_resource_partial_update = createAsyncThunk(
  "resources/api_v1_resource_partial_update",
  async payload => {
    const response = await apiService.api_v1_resource_partial_update(payload)
    return response.data
  }
)
export const api_v1_resource_delete = createAsyncThunk(
  "resources/api_v1_resource_delete",
  async payload => {
    const response = await apiService.api_v1_resource_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_resource_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_resource_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_resource_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_resource_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_resource_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_resource_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_resource_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_resource_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_resource_list,
  api_v1_resource_create,
  api_v1_resource_read,
  api_v1_resource_update,
  api_v1_resource_partial_update,
  api_v1_resource_delete,
  slice: resourcesSlice
}
