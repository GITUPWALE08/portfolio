import { profile } from '../../data/profile';
import { SectionHeader } from '../common/SectionHeader';

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
      <SectionHeader title="About" />
      <div className="max-w-3xl prose prose-neutral dark:prose-invert">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {profile.aboutPositioning}
        </p>
      </div>
    </section>
  );
}
