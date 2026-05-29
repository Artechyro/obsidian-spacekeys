declare global {
    type CapacitorListenerHandle = { remove: () => Promise<void> };

    interface Window {
        Capacitor: {
            Plugins: {
                // Docs: https://capacitorjs.com/docs/apis/keyboard
                // Only present on mobile devices
                Keyboard?: {
                    // Only supported on Android
                    show(): Promise<void>;

                    hide(): Promise<void>;
                    addListener(event: "keyboardDidShow", handler: () => void): Promise<CapacitorListenerHandle>;
                    addListener(event: "keyboardDidHide", handler: () => void): Promise<CapacitorListenerHandle>;
                };
            };
        };
    }
}

export {};
