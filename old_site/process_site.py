#!/usr/bin/env python3

import os

from requests_html import HTML


def files_in_dir(base_dir):
    for dir, _, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.aspx'):
                yield f"{dir}/{file}"


def main():
    selector = '.ArticleBody'
    base_dir = './dump/thec3.uk/'


    for file in files_in_dir(base_dir):
        with open(file) as html_file:
            html = HTML(html=html_file.read())
            elem = html.find(selector, first=True)
            if elem:
                new_file = '.'.join([file.rsplit('/', 1)[-1].split('.')[0], 'html'])
                print(f'File: {new_file}')
                with open(f'html/{new_file}', 'w') as outfile:
                    outfile.write(elem.html)
    # print('-------------')
    # for item in elem_set:
    #     print(item)
    #     print('-------------')
    # print(f"Found {len(elem_set)} versions of {selector}")


if __name__ == '__main__':
    main()
