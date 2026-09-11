import { profile } from '../../data/profile';
import { SectionHeader } from '../common/SectionHeader';
import { ExpandableContent } from '../common/ExpandableContent';

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader title="About" />
      <div className="max-w-3xl prose prose-neutral dark:prose-invert">
        <ExpandableContent collapsedHeight="4.5rem">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {profile.aboutPositioning}
          </p>
        </ExpandableContent>
      </div>
    </section>
  );
}
