// Global window type augmentation for Google Analytics
interface Window {
  gtag: (
    command: string,
    event: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
}
