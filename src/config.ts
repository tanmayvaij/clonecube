/**
 * Directories that should always be ignored while scanning a project.
 * These are typically build outputs, dependency folders, or VCS data.
 */
const IGNORE_DIRS = [
  "node_modules",
  ".git",
  ".next",
  "out",
  "dist",
  "__pycache__",
  "venv",
  "vendor",
];

/**
 * Files that should always be ignored while scanning a project.
 */
const IGNORE_FILES = ["yarn.lock", "package-lock.json", "pnpm-lock.yaml"];

/**
 * File extensions considered binary.
 * These will be encoded in base64 if included in snapshots.
 */
const BINARY_EXTS = [
  // Images (raster)
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".ico",
  ".bmp",
  ".tiff",
  ".avif",

  // Documents
  ".pdf",
  ".docx",
  ".xlsx",
  ".pptx",
  ".doc",
  ".xls",
  ".ppt",

  // Archives
  ".zip",
  ".tar",
  ".gz",
  ".rar",
  ".7z",
  ".bz2",
  ".xz",

  // Executables & Libraries
  ".exe",
  ".dll",
  ".so",
  ".dylib",
  ".bin",

  // Fonts
  ".ttf",
  ".otf",
  ".woff",
  ".woff2",
  ".eot",

  // Video
  ".mp4",
  ".avi",
  ".mov",
  ".mkv",
  ".webm",
  ".flv",

  // Audio
  ".mp3",
  ".wav",
  ".flac",
  ".ogg",
  ".m4a",
  ".aac",
];

export { IGNORE_DIRS, IGNORE_FILES, BINARY_EXTS };
