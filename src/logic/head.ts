import { useHead as originalUseHead, HeadObject } from '@vueuse/head'
import brand from '~/config/brand'

export const useHead = (head: HeadObject) => originalUseHead({
  ...head,
  title: `${head.title} - ${brand.BRAND_NAME}`,
})
