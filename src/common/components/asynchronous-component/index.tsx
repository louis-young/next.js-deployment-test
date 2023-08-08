import type { ReactNode } from "react";

interface AsynchronousComponentProps<TData> {
  children: (data: NonNullable<TData>) => ReactNode;
  data: TData;
  errorFallback: ReactNode;
  hasError: boolean;
  isLoading: boolean;
  loadingFallback: ReactNode;
}

export const AsynchronousComponent = <TData,>({
  children,
  data,
  errorFallback,
  hasError,
  isLoading,
  loadingFallback,
}: AsynchronousComponentProps<TData>) => {
  return isLoading
    ? loadingFallback
    : hasError
    ? errorFallback
    : data !== undefined && data !== null
    ? children(data)
    : undefined;
};
