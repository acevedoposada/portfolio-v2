import { ComponentType, lazy, Suspense, useMemo } from "react"
import { BlogCardProps, CardProps, CardVariant } from "./card.entity"

export function BlogCard({ variant, ...props }: BlogCardProps): JSX.Element {
  const cardTypes = useMemo<
    Record<CardVariant, ComponentType<CardProps>>
  >(() => ({
    [CardVariant.featured]: lazy(() => import('./featured')),
    [CardVariant.post]: lazy(() => import('./post'))
  }), [])

  const Card = cardTypes[variant || CardVariant.post];

  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Card {...props as CardProps} />
    </Suspense>
  )
}