// src/helpers/normalizeFileName.js
export const normalizeFileName = (title) => {
    return title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  };
  