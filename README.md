# Label New Pull Requests Action

This GitHub Action adds a specified label when a new pull request is opened. It was authored by Leonardo Montini.

## Inputs

### `gh-token`

**Required** The GitHub token for authentication.

### `label`

**Required** The label to be applied to the pull request.

## Usage

To use this action in your workflow, add the following step:

```yaml
- name: Label new pull requests
  uses: your-github-username/your-repo-name@version
  with:
    gh-token: ${{ secrets.GITHUB_TOKEN }}
    label: 'your-label'
