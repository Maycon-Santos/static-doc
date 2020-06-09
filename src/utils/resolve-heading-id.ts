export default function resolveHeadingId (children: string) {
  return children.replace(/ /g, '-')
}
