import type { MaybeRef } from 'vue'
import { ref } from 'vue'

export function useRequest(
  onRequest: ((params: Record<string, any>) => Promise<any>) | undefined,
  options: { data: any, immediate: boolean, loading: MaybeRef<boolean>, hook: (data: any) => any },
) {
  const error = ref<any>()
  const dataRef = ref<any>(options?.data)
  const loadingRef = ref(options?.loading)
  const requested = ref(false)

  async function request(params?: Record<string, any>) {
    loadingRef.value = true
    try {
      const res = await onRequest?.({ ...params })
      if (options?.hook) {
        dataRef.value = await options.hook(res)
      }
      else {
        dataRef.value = res
      }
    }
    catch (err: any) {
      error.value = err?.message ?? err
    }
    finally {
      loadingRef.value = false
      requested.value = true
    }
  }

  function execute(params?: Record<string, any>) {
    request(params)
  }

  // 立即请求数据
  if (options?.immediate) {
    execute()
  }

  return {
    error,
    data: dataRef,
    loading: loadingRef,
    requested,
    request,
    execute,
  }
}
