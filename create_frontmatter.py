#!/usr/bin/env python3

import os
import os.path


FRONTMATTER = '''---
title: Young Adults
heroImage: /Images/Content/4/867563.jpeg
template: content
card:
  title: Young Adults
  cta: More Details
  description: If you're between the ages of 18-30 then C3 Young Adults is for you! In addition to regular socials and special events, we meet every Wednesday during term time.
  image: /Images/Content/4/916429.jpeg
gallery:
  - /nextsteps/c3groups/
  - /nextsteps/growthpath/
---'''


def files_in_dir(base_dir):
    for dir, _, files in os.walk(base_dir):
        for file in files:
            filepath = f"{dir}/{file}"
            if file.endswith('.md') and os.path.isfile(filepath) and os.path.getsize(filepath) == 0:
                yield filepath


def main():
    base_dir = './content/pages'

    for file in files_in_dir(base_dir):
        with open(file, 'w') as fobj:
            fobj.write(FRONTMATTER)

if __name__ == '__main__':
    main()
