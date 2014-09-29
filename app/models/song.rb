class Song < ActiveRecord::Base
  validates_presence_of :title, :link
  validate 'youtube_link'

  def youtube_link
    unless link.match(/^https:\/\/www.youtube.com/)
      errors.add(:link, "must be a youtube link")
    end
  end
end
