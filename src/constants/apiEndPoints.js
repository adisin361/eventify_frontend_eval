export const BACKEND_URL = 'http://localhost:8000';

export const GET_EVENTS = {
  url: 'api/events',
  method: 'GET'
};

export const PATCH_EVENT = (id) => ({
  url: `api/events/${id}`,
  method: 'PATCH'
});

export const GET_EVENT = (id) => ({
  url: `api/events/${id}`,
  method: 'GET'
});
