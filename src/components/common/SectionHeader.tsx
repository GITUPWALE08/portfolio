interface SectionHeaderProps {
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeader({ title, description, id }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16" id={id}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
