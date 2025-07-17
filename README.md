<div align="center">

# KiroCord

<img width="256" alt="KiroCord Logo" src="https://iq.wiki/cdn-cgi/image/width=1920,quality=70/https://ipfs.everipedia.org/ipfs/QmPtoxPmpnNMViu2UW9THH7BN3PE1soinkD4pFKdZRcfPy" />

Discord Rich Presence for Kiro IDE

</div>

## About KiroCord

KiroCord is a Discord Rich Presence extension specifically designed for the Kiro IDE by AWS. This extension allows you to showcase your development activity on Discord while using Kiro IDE.

## Features

- Shows what you're working on in Kiro IDE
- Customizable application name display
- Packed with 60+ extension settings
- Support for over 130+ programming languages
- Custom images support (using HTTP links)
- Custom button links
- Detects debugging sessions
- Detects when you are idling

## Configuration

The extension provides numerous configuration options to customize your Discord Rich Presence. You can modify these settings through the Kiro IDE settings interface.

### Available Variables

The following variables will be replaced with their respective values in custom strings:

| Variable                              | Value                                              |
| ------------------------------------- | -------------------------------------------------- |
| `{app_name}`                          | current editor name                                |
| `{app_id}`                            | editor name suitable for URLs                      |
| `{file_name}`                         | name of the file                                   |
| `{file_extension}`                    | extension of the file                              |
| `{file_size}`                         | size of the file                                   |
| `{folder_and_file}`                   | folder and file name                               |
| `{relative_file_path}`                | filepath relative to the workspace folder          |
| `{directory_name}`                    | directory name                                     |
| `{full_directory_name}`               | full directory name                                |
| `{workspace}`                         | name of the workspace                              |
| `{workspace_folder}`                  | name of the workspace folder                       |
| `{workspace_and_folder}`              | name of the workspace and folder                   |
| `{lang}` \| `{Lang}` \| `{LANG}`      | format of the lang string (css, Css, CSS)          |
| `{a_lang}` \| `{a_Lang}`\| `{a_LANG}` | same as above, but prefixes with "a" or "an"       |
| `{problems}`                          | problems text defined in settings                  |
| `{problems_count}`                    | number of problems                                 |
| `{problems_count_errors}`             | number of problems that are errors                 |
| `{problems_count_warnings}`           | number of problems that are warnings               |
| `{problems_count_infos}`              | number of problems that are infos                  |
| `{problems_count_hints}`              | number of problems that are hints                  |
| `{line_count}`                        | number of lines                                    |
| `{current_line}`                      | current line                                       |
| `{current_column}`                    | current column                                     |
| `{git_owner}`                         | current git repository owner                       |
| `{git_repo}`                          | repository name for current repository             |
| `{git_branch}`                        | current git branch                                 |
| `{git_protocol}`                      | git protocol (https, http, ssh)                    |
| `{git_resource}`                      | git resource link (etc: github.com) (exclude port) |
| `{git_host}`                          | git host link (etc: github.com) (include port)     |
| `{git_port}`                          | pot for the git link                               |
| `{git_href}`                          | href to the git repository                         |
| `{git_url}`                           | url link to the git repository                     |
| `{empty}`                             | an empty space                                     |

## Credits

KiroCord is a fork of [VSCord](https://github.com/LeonardSSH/vscord), a Discord Rich Presence extension for Visual Studio Code. This extension would not exist without the original work by LeonardSSH and contributors.

## Developer

**KiroCord** is developed and maintained by:

- **Developer**: Roreos
- **Company**: Rorello Development
- **GitHub**: [Roreos](https://github.com/Roreos)
- **Email**: rorellodevelopment@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.