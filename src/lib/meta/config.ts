import config from '../../../config.json';

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly github_account: string;
  readonly mail_address: string;
  readonly blog_address: string;
};

export default config as Config;
