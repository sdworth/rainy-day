class SongsController < ApplicationController
  def create
    @song = Song.create!(song_params)

    render json: @song
  end

  def update

  end

  private

  def song_params
    params.permit(:title, :link)
  end
end
